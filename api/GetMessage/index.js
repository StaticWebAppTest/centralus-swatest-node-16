module.exports = async function (context, req) {
  const date = "2022-06-26T17:10:31.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

