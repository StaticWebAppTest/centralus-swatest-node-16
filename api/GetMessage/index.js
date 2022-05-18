module.exports = async function (context, req) {
  const date = "2022-05-18T04:23:21.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

