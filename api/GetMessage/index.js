module.exports = async function (context, req) {
  const date = "2022-06-06T13:33:15.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

