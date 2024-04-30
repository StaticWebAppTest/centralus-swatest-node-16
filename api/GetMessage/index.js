module.exports = async function (context, req) {
  const date = "2024-04-30T12:16:27.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

