module.exports = async function (context, req) {
  const date = "2025-04-06T08:14:46.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

