module.exports = async function (context, req) {
  const date = "2024-01-06T17:07:56.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

