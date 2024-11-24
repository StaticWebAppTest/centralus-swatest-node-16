module.exports = async function (context, req) {
  const date = "2024-11-24T04:14:30.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

