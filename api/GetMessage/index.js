module.exports = async function (context, req) {
  const date = "2023-04-01T19:06:39.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

