module.exports = async function (context, req) {
  const date = "2023-11-22T01:54:09.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

