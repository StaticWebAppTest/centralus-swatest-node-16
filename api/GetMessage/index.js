module.exports = async function (context, req) {
  const date = "2023-07-30T15:07:42.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

