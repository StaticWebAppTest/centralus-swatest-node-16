module.exports = async function (context, req) {
  const date = "2024-08-28T23:11:20.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

