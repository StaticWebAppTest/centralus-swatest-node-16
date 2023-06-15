module.exports = async function (context, req) {
  const date = "2023-06-15T04:10:33.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

