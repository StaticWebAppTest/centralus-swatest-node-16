module.exports = async function (context, req) {
  const date = "2023-09-01T09:08:43.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

