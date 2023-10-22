module.exports = async function (context, req) {
  const date = "2023-10-22T12:15:00.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

