module.exports = async function (context, req) {
  const date = "2024-06-05T20:11:21.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

