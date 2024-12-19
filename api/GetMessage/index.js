module.exports = async function (context, req) {
  const date = "2024-12-19T09:13:12.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

