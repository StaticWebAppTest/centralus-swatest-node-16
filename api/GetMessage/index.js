module.exports = async function (context, req) {
  const date = "2023-02-14T21:09:00.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

