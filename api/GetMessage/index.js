module.exports = async function (context, req) {
  const date = "2022-08-01T12:22:00.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

