module.exports = async function (context, req) {
  const date = "2022-12-06T03:11:09.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

