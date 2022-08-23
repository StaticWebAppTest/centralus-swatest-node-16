module.exports = async function (context, req) {
  const date = "2022-08-23T07:17:45.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

