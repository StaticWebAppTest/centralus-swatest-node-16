module.exports = async function (context, req) {
  const date = "2024-02-02T04:11:38.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

