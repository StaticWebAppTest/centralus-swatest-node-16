module.exports = async function (context, req) {
  const date = "2024-09-23T06:17:09.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

