module.exports = async function (context, req) {
  const date = "2023-12-09T02:20:09.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

