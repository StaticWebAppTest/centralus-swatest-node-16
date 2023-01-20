module.exports = async function (context, req) {
  const date = "2023-01-20T23:09:28.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

