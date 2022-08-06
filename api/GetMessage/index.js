module.exports = async function (context, req) {
  const date = "2022-08-06T16:13:44.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

