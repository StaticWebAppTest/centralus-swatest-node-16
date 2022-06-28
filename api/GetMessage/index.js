module.exports = async function (context, req) {
  const date = "2022-06-28T16:15:26.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

