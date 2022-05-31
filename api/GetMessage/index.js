module.exports = async function (context, req) {
  const date = "2022-05-31T08:17:13.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

