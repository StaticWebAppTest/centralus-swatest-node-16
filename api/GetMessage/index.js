module.exports = async function (context, req) {
  const date = "2025-07-23T12:30:05.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

