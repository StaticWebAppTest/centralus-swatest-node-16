module.exports = async function (context, req) {
  const date = "2022-07-04T22:10:12.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

