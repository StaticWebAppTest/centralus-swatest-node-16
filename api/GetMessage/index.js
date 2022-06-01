module.exports = async function (context, req) {
  const date = "2022-06-01T21:11:08.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

