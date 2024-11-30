module.exports = async function (context, req) {
  const date = "2024-11-30T20:12:27.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

