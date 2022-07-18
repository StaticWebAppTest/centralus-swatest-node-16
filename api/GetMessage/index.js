module.exports = async function (context, req) {
  const date = "2022-07-18T23:10:32.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

