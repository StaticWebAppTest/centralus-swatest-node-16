module.exports = async function (context, req) {
  const date = "2023-01-19T02:17:23.604Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

