module.exports = async function (context, req) {
  const date = "2023-01-31T19:07:42.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

