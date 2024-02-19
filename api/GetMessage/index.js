module.exports = async function (context, req) {
  const date = "2024-02-19T00:42:15.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

