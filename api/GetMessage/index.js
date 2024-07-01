module.exports = async function (context, req) {
  const date = "2024-07-01T05:10:43.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

