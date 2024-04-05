module.exports = async function (context, req) {
  const date = "2024-04-05T05:09:05.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

