module.exports = async function (context, req) {
  const date = "2023-05-17T00:51:15.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

