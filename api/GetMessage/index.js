module.exports = async function (context, req) {
  const date = "2022-06-01T18:14:03.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

