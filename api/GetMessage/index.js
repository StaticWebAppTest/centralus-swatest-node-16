module.exports = async function (context, req) {
  const date = "2022-06-22T17:20:24.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

