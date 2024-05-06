module.exports = async function (context, req) {
  const date = "2024-05-06T15:10:00.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

