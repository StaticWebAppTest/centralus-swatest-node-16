module.exports = async function (context, req) {
  const date = "2022-08-22T13:35:52.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

