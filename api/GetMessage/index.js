module.exports = async function (context, req) {
  const date = "2022-05-18T21:10:29.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

