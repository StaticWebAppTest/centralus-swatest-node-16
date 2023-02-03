module.exports = async function (context, req) {
  const date = "2023-02-03T18:11:41.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

