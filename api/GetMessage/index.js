module.exports = async function (context, req) {
  const date = "2023-03-03T15:10:27.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

