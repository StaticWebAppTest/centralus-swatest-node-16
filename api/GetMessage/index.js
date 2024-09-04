module.exports = async function (context, req) {
  const date = "2024-09-04T21:10:00.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

