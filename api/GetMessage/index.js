module.exports = async function (context, req) {
  const date = "2023-04-15T06:11:05.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

