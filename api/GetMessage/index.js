module.exports = async function (context, req) {
  const date = "2022-03-13T23:10:35.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

