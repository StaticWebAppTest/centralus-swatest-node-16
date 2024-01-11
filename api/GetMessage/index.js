module.exports = async function (context, req) {
  const date = "2024-01-11T18:12:00.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

