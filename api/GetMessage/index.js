module.exports = async function (context, req) {
  const date = "2022-05-03T21:10:10.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

