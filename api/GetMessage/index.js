module.exports = async function (context, req) {
  const date = "2023-04-17T22:08:12.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

