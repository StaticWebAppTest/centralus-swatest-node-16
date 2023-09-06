module.exports = async function (context, req) {
  const date = "2023-09-06T10:09:30.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

