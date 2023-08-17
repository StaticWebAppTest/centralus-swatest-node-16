module.exports = async function (context, req) {
  const date = "2023-08-17T09:08:34.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

