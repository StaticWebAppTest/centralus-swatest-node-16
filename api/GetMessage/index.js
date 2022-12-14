module.exports = async function (context, req) {
  const date = "2022-12-14T07:09:41.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

