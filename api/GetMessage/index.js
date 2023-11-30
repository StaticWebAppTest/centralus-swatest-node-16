module.exports = async function (context, req) {
  const date = "2023-11-30T02:23:15.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

