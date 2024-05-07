module.exports = async function (context, req) {
  const date = "2024-05-07T20:08:30.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

