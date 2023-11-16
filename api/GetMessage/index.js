module.exports = async function (context, req) {
  const date = "2023-11-16T01:51:59.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

