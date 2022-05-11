module.exports = async function (context, req) {
  const date = "2022-05-11T01:04:47.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

