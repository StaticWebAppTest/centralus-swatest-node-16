module.exports = async function (context, req) {
  const date = "2023-09-11T05:08:23.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

