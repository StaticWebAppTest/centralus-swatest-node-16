module.exports = async function (context, req) {
  const date = "2022-03-15T09:10:29.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

