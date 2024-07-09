module.exports = async function (context, req) {
  const date = "2024-07-09T07:10:12.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

