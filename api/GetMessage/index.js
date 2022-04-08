module.exports = async function (context, req) {
  const date = "2022-04-08T08:12:56.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

