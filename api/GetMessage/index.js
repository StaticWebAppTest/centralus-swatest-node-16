module.exports = async function (context, req) {
  const date = "2024-01-23T10:10:13.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

