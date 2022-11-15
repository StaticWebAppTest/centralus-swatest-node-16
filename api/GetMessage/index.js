module.exports = async function (context, req) {
  const date = "2022-11-15T06:13:48.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

