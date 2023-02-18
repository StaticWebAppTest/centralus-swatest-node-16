module.exports = async function (context, req) {
  const date = "2023-02-18T19:07:24.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

