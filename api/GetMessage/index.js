module.exports = async function (context, req) {
  const date = "2023-01-03T10:10:00.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

