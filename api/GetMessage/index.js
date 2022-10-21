module.exports = async function (context, req) {
  const date = "2022-10-21T11:12:51.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

