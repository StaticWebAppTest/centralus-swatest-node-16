module.exports = async function (context, req) {
  const date = "2024-05-30T06:13:54.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

