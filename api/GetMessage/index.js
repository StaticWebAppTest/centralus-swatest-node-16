module.exports = async function (context, req) {
  const date = "2024-07-13T20:10:39.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

