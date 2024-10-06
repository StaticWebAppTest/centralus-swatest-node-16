module.exports = async function (context, req) {
  const date = "2024-10-06T21:10:00.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

