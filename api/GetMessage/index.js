module.exports = async function (context, req) {
  const date = "2025-06-27T23:13:19.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

