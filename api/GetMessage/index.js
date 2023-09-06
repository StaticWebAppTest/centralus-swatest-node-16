module.exports = async function (context, req) {
  const date = "2023-09-06T06:11:38.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

