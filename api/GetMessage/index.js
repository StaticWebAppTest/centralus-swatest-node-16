module.exports = async function (context, req) {
  const date = "2023-05-17T17:07:41.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

