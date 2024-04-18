module.exports = async function (context, req) {
  const date = "2024-04-18T20:10:04.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

