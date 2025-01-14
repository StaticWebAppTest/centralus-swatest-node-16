module.exports = async function (context, req) {
  const date = "2025-01-14T06:15:51.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

