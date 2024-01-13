module.exports = async function (context, req) {
  const date = "2024-01-13T18:10:55.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

