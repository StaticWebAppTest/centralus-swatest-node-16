module.exports = async function (context, req) {
  const date = "2022-11-09T21:11:59.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

