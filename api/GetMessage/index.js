module.exports = async function (context, req) {
  const date = "2024-01-13T07:08:00.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

