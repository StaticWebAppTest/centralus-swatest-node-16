module.exports = async function (context, req) {
  const date = "2023-09-17T06:10:28.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

