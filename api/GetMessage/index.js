module.exports = async function (context, req) {
  const date = "2025-03-05T11:10:39.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

