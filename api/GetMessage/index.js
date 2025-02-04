module.exports = async function (context, req) {
  const date = "2025-02-04T17:10:12.869Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

