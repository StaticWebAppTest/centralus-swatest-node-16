module.exports = async function (context, req) {
  const date = "2023-07-04T18:12:38.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

