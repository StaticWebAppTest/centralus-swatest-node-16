module.exports = async function (context, req) {
  const date = "2022-05-09T08:14:23.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

