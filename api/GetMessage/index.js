module.exports = async function (context, req) {
  const date = "2024-06-05T04:14:49.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

