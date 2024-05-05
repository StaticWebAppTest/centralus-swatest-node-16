module.exports = async function (context, req) {
  const date = "2024-05-05T12:16:06.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

