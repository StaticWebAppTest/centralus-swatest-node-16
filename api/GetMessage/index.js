module.exports = async function (context, req) {
  const date = "2024-12-18T19:09:56.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

