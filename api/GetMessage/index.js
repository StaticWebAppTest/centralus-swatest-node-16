module.exports = async function (context, req) {
  const date = "2024-08-27T05:10:51.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

