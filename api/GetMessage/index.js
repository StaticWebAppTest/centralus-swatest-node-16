module.exports = async function (context, req) {
  const date = "2023-01-10T22:09:56.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

