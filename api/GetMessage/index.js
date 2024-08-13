module.exports = async function (context, req) {
  const date = "2024-08-13T18:14:37.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

