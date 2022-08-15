module.exports = async function (context, req) {
  const date = "2022-08-15T03:51:44.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

