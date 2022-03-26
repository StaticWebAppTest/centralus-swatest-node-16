module.exports = async function (context, req) {
  const date = "2022-03-26T07:10:11.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

