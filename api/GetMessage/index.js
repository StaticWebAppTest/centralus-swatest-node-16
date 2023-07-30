module.exports = async function (context, req) {
  const date = "2023-07-30T12:15:40.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

