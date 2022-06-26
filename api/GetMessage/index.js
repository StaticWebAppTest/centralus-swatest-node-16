module.exports = async function (context, req) {
  const date = "2022-06-26T07:09:22.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

