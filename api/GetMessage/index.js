module.exports = async function (context, req) {
  const date = "2023-07-23T00:56:10.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

