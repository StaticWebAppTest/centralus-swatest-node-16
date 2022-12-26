module.exports = async function (context, req) {
  const date = "2022-12-26T11:07:36.179Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

