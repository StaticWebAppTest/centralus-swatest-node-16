module.exports = async function (context, req) {
  const date = "2024-01-13T09:08:33.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

