module.exports = async function (context, req) {
  const date = "2023-02-14T22:09:32.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

