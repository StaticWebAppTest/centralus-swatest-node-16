module.exports = async function (context, req) {
  const date = "2024-01-08T23:09:41.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

