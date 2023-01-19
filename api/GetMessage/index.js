module.exports = async function (context, req) {
  const date = "2023-01-19T10:10:38.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

