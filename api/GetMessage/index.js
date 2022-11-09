module.exports = async function (context, req) {
  const date = "2022-11-09T06:18:37.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

