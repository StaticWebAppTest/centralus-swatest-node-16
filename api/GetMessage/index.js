module.exports = async function (context, req) {
  const date = "2024-07-03T18:13:15.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

