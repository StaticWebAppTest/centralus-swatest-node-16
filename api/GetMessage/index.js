module.exports = async function (context, req) {
  const date = "2022-06-04T21:10:42.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

