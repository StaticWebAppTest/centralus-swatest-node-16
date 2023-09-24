module.exports = async function (context, req) {
  const date = "2023-09-24T10:08:04.943Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

