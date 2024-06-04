module.exports = async function (context, req) {
  const date = "2024-06-04T15:10:38.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

