module.exports = async function (context, req) {
  const date = "2024-05-30T23:10:41.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

