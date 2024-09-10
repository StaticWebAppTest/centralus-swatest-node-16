module.exports = async function (context, req) {
  const date = "2024-09-10T06:16:10.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

