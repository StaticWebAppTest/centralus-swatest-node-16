module.exports = async function (context, req) {
  const date = "2023-06-09T23:09:00.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

