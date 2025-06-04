module.exports = async function (context, req) {
  const date = "2025-06-04T15:37:39.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

