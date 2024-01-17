module.exports = async function (context, req) {
  const date = "2024-01-17T03:10:12.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

