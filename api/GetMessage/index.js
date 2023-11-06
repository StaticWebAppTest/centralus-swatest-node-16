module.exports = async function (context, req) {
  const date = "2023-11-06T18:11:29.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

