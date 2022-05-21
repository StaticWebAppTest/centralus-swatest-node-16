module.exports = async function (context, req) {
  const date = "2022-05-21T05:10:51.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

