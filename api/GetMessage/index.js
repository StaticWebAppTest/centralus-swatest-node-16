module.exports = async function (context, req) {
  const date = "2024-07-05T08:13:06.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

