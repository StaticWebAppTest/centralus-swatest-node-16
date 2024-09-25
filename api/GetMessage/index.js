module.exports = async function (context, req) {
  const date = "2024-09-25T04:14:44.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

