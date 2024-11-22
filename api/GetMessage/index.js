module.exports = async function (context, req) {
  const date = "2024-11-22T19:09:39.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

