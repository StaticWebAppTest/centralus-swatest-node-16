module.exports = async function (context, req) {
  const date = "2023-09-09T02:12:14.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

