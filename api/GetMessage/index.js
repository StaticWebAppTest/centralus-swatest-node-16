module.exports = async function (context, req) {
  const date = "2023-04-01T04:10:27.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

