module.exports = async function (context, req) {
  const date = "2024-08-31T20:12:30.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

