module.exports = async function (context, req) {
  const date = "2024-11-11T20:12:07.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

