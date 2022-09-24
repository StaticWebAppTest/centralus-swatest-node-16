module.exports = async function (context, req) {
  const date = "2022-09-24T23:12:13.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

