module.exports = async function (context, req) {
  const date = "2022-08-06T07:10:11.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

