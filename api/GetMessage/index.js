module.exports = async function (context, req) {
  const date = "2023-05-24T19:06:58.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

