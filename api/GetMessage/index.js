module.exports = async function (context, req) {
  const date = "2024-08-27T17:09:28.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

