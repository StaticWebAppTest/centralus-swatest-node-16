module.exports = async function (context, req) {
  const date = "2023-06-18T03:13:34.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

