module.exports = async function (context, req) {
  const date = "2024-06-11T22:09:26.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

