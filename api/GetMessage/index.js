module.exports = async function (context, req) {
  const date = "2024-07-03T23:11:58.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

