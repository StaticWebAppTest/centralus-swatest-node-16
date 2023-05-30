module.exports = async function (context, req) {
  const date = "2023-05-30T17:06:13.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

