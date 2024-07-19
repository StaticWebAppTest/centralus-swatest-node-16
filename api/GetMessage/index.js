module.exports = async function (context, req) {
  const date = "2024-07-19T17:10:31.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

