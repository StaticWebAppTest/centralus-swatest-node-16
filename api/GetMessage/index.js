module.exports = async function (context, req) {
  const date = "2024-04-29T03:11:00.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

