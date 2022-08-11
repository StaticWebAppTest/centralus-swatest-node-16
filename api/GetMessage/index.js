module.exports = async function (context, req) {
  const date = "2022-08-11T23:11:23.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

