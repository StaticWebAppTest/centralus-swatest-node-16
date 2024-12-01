module.exports = async function (context, req) {
  const date = "2024-12-01T21:10:29.836Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

