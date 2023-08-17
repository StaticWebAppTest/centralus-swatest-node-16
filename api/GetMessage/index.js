module.exports = async function (context, req) {
  const date = "2023-08-17T03:08:49.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

