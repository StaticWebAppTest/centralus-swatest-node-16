module.exports = async function (context, req) {
  const date = "2022-09-26T04:19:22.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

