module.exports = async function (context, req) {
  const date = "2023-12-14T23:09:29.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

