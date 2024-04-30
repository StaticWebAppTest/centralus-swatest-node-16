module.exports = async function (context, req) {
  const date = "2024-04-30T04:12:22.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

