module.exports = async function (context, req) {
  const date = "2024-11-27T16:15:19.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

