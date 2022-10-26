module.exports = async function (context, req) {
  const date = "2022-10-26T04:46:42.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

