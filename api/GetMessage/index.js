module.exports = async function (context, req) {
  const date = "2022-09-11T05:33:29.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

