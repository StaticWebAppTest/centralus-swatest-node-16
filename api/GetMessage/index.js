module.exports = async function (context, req) {
  const date = "2024-05-15T20:11:36.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

