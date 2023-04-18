module.exports = async function (context, req) {
  const date = "2023-04-18T06:12:00.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

