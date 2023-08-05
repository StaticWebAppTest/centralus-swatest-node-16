module.exports = async function (context, req) {
  const date = "2023-08-05T11:06:32.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

