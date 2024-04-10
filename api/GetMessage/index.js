module.exports = async function (context, req) {
  const date = "2024-04-10T14:08:36.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

