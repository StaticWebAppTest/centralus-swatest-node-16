module.exports = async function (context, req) {
  const date = "2024-03-22T03:09:50.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

