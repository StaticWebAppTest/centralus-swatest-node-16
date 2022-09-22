module.exports = async function (context, req) {
  const date = "2022-09-22T17:25:44.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

