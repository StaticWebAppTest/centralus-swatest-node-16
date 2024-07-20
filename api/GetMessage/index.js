module.exports = async function (context, req) {
  const date = "2024-07-20T14:08:50.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

