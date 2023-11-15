module.exports = async function (context, req) {
  const date = "2023-11-15T08:11:56.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

