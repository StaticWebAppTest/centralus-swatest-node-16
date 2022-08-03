module.exports = async function (context, req) {
  const date = "2022-08-03T14:10:06.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

