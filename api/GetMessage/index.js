module.exports = async function (context, req) {
  const date = "2024-05-31T04:13:31.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

