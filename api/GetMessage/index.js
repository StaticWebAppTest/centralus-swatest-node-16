module.exports = async function (context, req) {
  const date = "2023-09-25T06:12:24.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

