module.exports = async function (context, req) {
  const date = "2022-08-18T01:06:24.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

