module.exports = async function (context, req) {
  const date = "2025-03-06T05:12:45.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

