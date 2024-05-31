module.exports = async function (context, req) {
  const date = "2024-05-31T20:10:10.430Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

