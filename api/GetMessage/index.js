module.exports = async function (context, req) {
  const date = "2024-05-03T12:16:33.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

