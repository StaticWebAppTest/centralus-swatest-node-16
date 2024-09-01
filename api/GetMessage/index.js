module.exports = async function (context, req) {
  const date = "2024-09-01T20:12:05.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

