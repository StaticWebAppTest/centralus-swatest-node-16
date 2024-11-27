module.exports = async function (context, req) {
  const date = "2024-11-27T14:11:51.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

