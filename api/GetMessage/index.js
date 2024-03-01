module.exports = async function (context, req) {
  const date = "2024-03-01T14:08:02.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

