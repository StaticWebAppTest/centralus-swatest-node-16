module.exports = async function (context, req) {
  const date = "2022-08-06T14:09:02.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

