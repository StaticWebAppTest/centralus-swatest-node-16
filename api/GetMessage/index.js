module.exports = async function (context, req) {
  const date = "2024-06-21T10:10:43.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

