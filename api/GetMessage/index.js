module.exports = async function (context, req) {
  const date = "2023-11-30T10:10:18.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

