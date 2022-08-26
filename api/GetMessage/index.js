module.exports = async function (context, req) {
  const date = "2022-08-26T23:10:58.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

