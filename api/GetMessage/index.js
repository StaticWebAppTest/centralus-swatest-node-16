module.exports = async function (context, req) {
  const date = "2022-03-06T23:10:28.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

