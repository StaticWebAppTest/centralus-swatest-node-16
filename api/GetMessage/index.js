module.exports = async function (context, req) {
  const date = "2025-02-04T20:12:37.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

