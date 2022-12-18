module.exports = async function (context, req) {
  const date = "2022-12-18T23:09:39.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

