module.exports = async function (context, req) {
  const date = "2023-04-15T02:00:30.151Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

