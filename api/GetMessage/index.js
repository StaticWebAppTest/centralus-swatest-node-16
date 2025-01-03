module.exports = async function (context, req) {
  const date = "2025-01-03T10:12:13.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

