module.exports = async function (context, req) {
  const date = "2024-07-03T20:10:53.650Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

