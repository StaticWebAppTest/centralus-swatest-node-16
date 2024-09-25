module.exports = async function (context, req) {
  const date = "2024-09-25T08:16:32.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

