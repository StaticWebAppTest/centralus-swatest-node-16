module.exports = async function (context, req) {
  const date = "2025-01-03T17:10:21.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

