module.exports = async function (context, req) {
  const date = "2022-11-26T16:12:40.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

