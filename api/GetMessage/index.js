module.exports = async function (context, req) {
  const date = "2023-12-31T03:09:48.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

