module.exports = async function (context, req) {
  const date = "2024-01-19T00:44:48.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

