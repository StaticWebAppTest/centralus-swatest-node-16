module.exports = async function (context, req) {
  const date = "2022-02-26T20:10:51.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

