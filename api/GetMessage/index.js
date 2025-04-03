module.exports = async function (context, req) {
  const date = "2025-04-03T07:13:07.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

