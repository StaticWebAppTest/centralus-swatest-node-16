module.exports = async function (context, req) {
  const date = "2025-02-02T22:10:27.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

