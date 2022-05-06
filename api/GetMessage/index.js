module.exports = async function (context, req) {
  const date = "2022-05-06T06:15:24.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

