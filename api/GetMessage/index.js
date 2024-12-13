module.exports = async function (context, req) {
  const date = "2024-12-13T07:12:26.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

