module.exports = async function (context, req) {
  const date = "2024-04-28T10:08:46.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

