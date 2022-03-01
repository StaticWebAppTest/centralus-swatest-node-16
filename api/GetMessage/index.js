module.exports = async function (context, req) {
  const date = "2022-03-01T10:10:53.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

