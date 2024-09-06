module.exports = async function (context, req) {
  const date = "2024-09-06T10:11:55.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

