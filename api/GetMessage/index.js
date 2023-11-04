module.exports = async function (context, req) {
  const date = "2023-11-04T11:06:34.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

