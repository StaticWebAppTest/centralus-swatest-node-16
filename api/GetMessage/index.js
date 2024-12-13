module.exports = async function (context, req) {
  const date = "2024-12-13T15:12:55.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

