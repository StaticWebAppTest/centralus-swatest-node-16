module.exports = async function (context, req) {
  const date = "2023-07-27T02:21:45.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

