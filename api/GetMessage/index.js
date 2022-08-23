module.exports = async function (context, req) {
  const date = "2022-08-23T08:14:51.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

