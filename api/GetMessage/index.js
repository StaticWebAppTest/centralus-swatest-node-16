module.exports = async function (context, req) {
  const date = "2023-07-31T02:00:36.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

