module.exports = async function (context, req) {
  const date = "2024-03-04T06:57:05.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

