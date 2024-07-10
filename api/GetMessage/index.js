module.exports = async function (context, req) {
  const date = "2024-07-10T12:19:38.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

