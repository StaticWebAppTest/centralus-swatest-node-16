module.exports = async function (context, req) {
  const date = "2022-08-09T16:14:44.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

