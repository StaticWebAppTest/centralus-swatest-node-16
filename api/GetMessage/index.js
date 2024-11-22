module.exports = async function (context, req) {
  const date = "2024-11-22T20:13:25.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

