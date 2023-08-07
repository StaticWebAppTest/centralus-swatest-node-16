module.exports = async function (context, req) {
  const date = "2023-08-07T08:11:52.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

