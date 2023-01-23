module.exports = async function (context, req) {
  const date = "2023-01-23T15:10:26.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

