module.exports = async function (context, req) {
  const date = "2023-03-06T07:09:48.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

