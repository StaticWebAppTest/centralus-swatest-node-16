module.exports = async function (context, req) {
  const date = "2024-05-03T20:10:40.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

