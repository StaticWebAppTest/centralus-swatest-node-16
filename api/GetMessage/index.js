module.exports = async function (context, req) {
  const date = "2024-12-31T17:09:49.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

