module.exports = async function (context, req) {
  const date = "2024-12-13T12:24:46.069Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

