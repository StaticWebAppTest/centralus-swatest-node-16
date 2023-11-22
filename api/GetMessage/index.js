module.exports = async function (context, req) {
  const date = "2023-11-22T05:09:12.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

