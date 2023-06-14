module.exports = async function (context, req) {
  const date = "2023-06-14T06:11:32.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

