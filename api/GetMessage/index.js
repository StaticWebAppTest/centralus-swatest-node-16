module.exports = async function (context, req) {
  const date = "2024-05-17T20:10:52.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

