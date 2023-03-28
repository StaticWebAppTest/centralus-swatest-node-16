module.exports = async function (context, req) {
  const date = "2023-03-28T21:08:21.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

