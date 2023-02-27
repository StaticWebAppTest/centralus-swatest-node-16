module.exports = async function (context, req) {
  const date = "2023-02-27T15:10:37.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

