module.exports = async function (context, req) {
  const date = "2025-12-03T12:30:06.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

