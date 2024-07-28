module.exports = async function (context, req) {
  const date = "2024-07-28T22:10:18.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

