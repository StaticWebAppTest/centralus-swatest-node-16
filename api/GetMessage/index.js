module.exports = async function (context, req) {
  const date = "2024-05-31T23:09:37.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

