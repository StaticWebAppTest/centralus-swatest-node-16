module.exports = async function (context, req) {
  const date = "2024-09-28T21:10:39.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

