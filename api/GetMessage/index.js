module.exports = async function (context, req) {
  const date = "2024-08-03T18:13:26.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

