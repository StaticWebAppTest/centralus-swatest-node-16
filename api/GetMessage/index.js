module.exports = async function (context, req) {
  const date = "2024-05-16T20:10:00.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

