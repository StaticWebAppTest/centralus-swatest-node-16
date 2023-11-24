module.exports = async function (context, req) {
  const date = "2023-11-24T07:08:31.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

