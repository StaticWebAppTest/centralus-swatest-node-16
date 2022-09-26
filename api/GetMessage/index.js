module.exports = async function (context, req) {
  const date = "2022-09-26T10:14:10.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

