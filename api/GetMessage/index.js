module.exports = async function (context, req) {
  const date = "2025-05-23T16:16:07.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

