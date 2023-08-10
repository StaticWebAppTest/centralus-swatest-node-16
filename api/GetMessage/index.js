module.exports = async function (context, req) {
  const date = "2023-08-10T19:07:00.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

