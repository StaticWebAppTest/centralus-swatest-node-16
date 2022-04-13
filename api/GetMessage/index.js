module.exports = async function (context, req) {
  const date = "2022-04-13T03:31:58.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

