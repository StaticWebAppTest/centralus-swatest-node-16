module.exports = async function (context, req) {
  const date = "2024-03-24T06:11:26.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

