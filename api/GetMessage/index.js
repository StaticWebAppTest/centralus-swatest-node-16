module.exports = async function (context, req) {
  const date = "2022-07-28T05:20:55.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

