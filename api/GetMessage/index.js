module.exports = async function (context, req) {
  const date = "2024-05-26T23:09:39.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

