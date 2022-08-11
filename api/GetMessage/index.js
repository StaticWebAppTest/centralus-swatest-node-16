module.exports = async function (context, req) {
  const date = "2022-08-11T05:11:09.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

