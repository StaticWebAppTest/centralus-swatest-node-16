module.exports = async function (context, req) {
  const date = "2022-12-10T08:12:03.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

