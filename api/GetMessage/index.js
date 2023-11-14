module.exports = async function (context, req) {
  const date = "2023-11-14T03:09:37.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

