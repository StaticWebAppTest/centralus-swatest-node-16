module.exports = async function (context, req) {
  const date = "2024-04-19T19:08:24.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

