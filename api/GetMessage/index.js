module.exports = async function (context, req) {
  const date = "2023-04-18T13:13:32.018Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

