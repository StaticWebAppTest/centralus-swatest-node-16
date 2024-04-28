module.exports = async function (context, req) {
  const date = "2024-04-28T18:11:03.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

