module.exports = async function (context, req) {
  const date = "2023-08-24T19:06:41.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

