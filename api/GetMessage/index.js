module.exports = async function (context, req) {
  const date = "2023-10-26T04:10:38.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

