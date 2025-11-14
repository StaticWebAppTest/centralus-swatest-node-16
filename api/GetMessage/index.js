module.exports = async function (context, req) {
  const date = "2025-11-14T21:12:23.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

