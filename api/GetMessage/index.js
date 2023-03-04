module.exports = async function (context, req) {
  const date = "2023-03-04T13:14:47.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

