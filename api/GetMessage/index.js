module.exports = async function (context, req) {
  const date = "2023-09-05T07:08:18.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

