module.exports = async function (context, req) {
  const date = "2022-11-06T12:20:19.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

