module.exports = async function (context, req) {
  const date = "2023-08-22T19:07:06.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

