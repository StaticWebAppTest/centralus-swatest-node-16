module.exports = async function (context, req) {
  const date = "2024-08-11T03:11:27.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

