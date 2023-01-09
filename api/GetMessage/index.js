module.exports = async function (context, req) {
  const date = "2023-01-09T02:11:08.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

