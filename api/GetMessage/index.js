module.exports = async function (context, req) {
  const date = "2023-06-07T20:09:00.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

