module.exports = async function (context, req) {
  const date = "2024-08-07T14:10:02.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

