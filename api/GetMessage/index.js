module.exports = async function (context, req) {
  const date = "2023-02-02T20:10:19.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

