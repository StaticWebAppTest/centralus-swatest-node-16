module.exports = async function (context, req) {
  const date = "2024-12-19T22:10:55.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

