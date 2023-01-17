module.exports = async function (context, req) {
  const date = "2023-01-17T05:08:58.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

