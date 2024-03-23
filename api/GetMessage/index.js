module.exports = async function (context, req) {
  const date = "2024-03-23T12:17:00.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

