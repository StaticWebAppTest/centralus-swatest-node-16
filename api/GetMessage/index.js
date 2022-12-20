module.exports = async function (context, req) {
  const date = "2022-12-20T15:10:51.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

