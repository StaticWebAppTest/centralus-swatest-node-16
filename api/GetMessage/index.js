module.exports = async function (context, req) {
  const date = "2022-10-25T23:13:17.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

