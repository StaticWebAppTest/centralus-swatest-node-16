module.exports = async function (context, req) {
  const date = "2024-02-14T04:11:33.220Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

