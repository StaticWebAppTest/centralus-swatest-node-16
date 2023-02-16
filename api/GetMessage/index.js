module.exports = async function (context, req) {
  const date = "2023-02-16T22:09:32.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

