module.exports = async function (context, req) {
  const date = "2022-11-18T06:13:59.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

