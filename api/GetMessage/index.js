module.exports = async function (context, req) {
  const date = "2024-09-30T15:12:31.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

