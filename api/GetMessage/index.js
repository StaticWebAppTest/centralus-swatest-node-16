module.exports = async function (context, req) {
  const date = "2024-08-23T00:51:12.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

