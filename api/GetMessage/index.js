module.exports = async function (context, req) {
  const date = "2022-06-03T06:13:21.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

