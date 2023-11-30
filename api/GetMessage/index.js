module.exports = async function (context, req) {
  const date = "2023-11-30T09:09:06.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

