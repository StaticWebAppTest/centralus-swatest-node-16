module.exports = async function (context, req) {
  const date = "2023-02-01T15:10:00.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

