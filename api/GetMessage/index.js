module.exports = async function (context, req) {
  const date = "2023-02-05T06:11:30.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

