module.exports = async function (context, req) {
  const date = "2022-02-26T06:12:11.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

