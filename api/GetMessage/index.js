module.exports = async function (context, req) {
  const date = "2024-01-12T20:10:00.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

