module.exports = async function (context, req) {
  const date = "2022-08-18T23:11:34.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

