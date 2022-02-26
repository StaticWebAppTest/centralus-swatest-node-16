module.exports = async function (context, req) {
  const date = "2022-02-26T13:12:13.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

