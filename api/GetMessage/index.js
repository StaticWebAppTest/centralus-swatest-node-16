module.exports = async function (context, req) {
  const date = "2022-03-06T13:12:43.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

