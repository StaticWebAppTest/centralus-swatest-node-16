module.exports = async function (context, req) {
  const date = "2025-05-03T10:12:30.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

