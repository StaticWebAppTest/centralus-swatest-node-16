module.exports = async function (context, req) {
  const date = "2022-11-27T08:12:19.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

