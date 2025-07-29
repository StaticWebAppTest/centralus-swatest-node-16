module.exports = async function (context, req) {
  const date = "2025-07-29T03:44:35.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

