module.exports = async function (context, req) {
  const date = "2023-06-27T01:00:15.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

