module.exports = async function (context, req) {
  const date = "2023-12-30T18:10:55.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

