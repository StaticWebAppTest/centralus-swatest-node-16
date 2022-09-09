module.exports = async function (context, req) {
  const date = "2022-09-09T12:23:50.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

