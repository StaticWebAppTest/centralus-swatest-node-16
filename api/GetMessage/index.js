module.exports = async function (context, req) {
  const date = "2024-03-07T19:07:12.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

