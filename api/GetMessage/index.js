module.exports = async function (context, req) {
  const date = "2022-05-01T21:10:03.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

