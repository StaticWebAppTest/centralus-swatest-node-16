module.exports = async function (context, req) {
  const date = "2024-09-27T22:11:05.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

