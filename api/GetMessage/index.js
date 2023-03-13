module.exports = async function (context, req) {
  const date = "2023-03-13T06:13:19.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

