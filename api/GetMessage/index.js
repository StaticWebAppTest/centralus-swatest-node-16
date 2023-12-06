module.exports = async function (context, req) {
  const date = "2023-12-06T20:10:00.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

