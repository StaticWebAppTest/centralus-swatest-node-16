module.exports = async function (context, req) {
  const date = "2023-03-08T12:19:19.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

