module.exports = async function (context, req) {
  const date = "2024-09-05T21:10:14.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

