module.exports = async function (context, req) {
  const date = "2023-03-30T07:08:45.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

