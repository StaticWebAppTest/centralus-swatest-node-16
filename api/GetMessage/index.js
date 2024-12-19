module.exports = async function (context, req) {
  const date = "2024-12-19T15:12:36.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

