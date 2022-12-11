module.exports = async function (context, req) {
  const date = "2022-12-11T12:16:51.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

