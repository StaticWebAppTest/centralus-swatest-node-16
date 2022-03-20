module.exports = async function (context, req) {
  const date = "2022-03-20T06:12:00.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

