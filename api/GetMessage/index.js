module.exports = async function (context, req) {
  const date = "2023-02-19T15:09:12.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

