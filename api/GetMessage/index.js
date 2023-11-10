module.exports = async function (context, req) {
  const date = "2023-11-10T00:41:50.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

