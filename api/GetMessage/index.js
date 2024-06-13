module.exports = async function (context, req) {
  const date = "2024-06-13T20:10:46.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

