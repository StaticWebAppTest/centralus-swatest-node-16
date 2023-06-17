module.exports = async function (context, req) {
  const date = "2023-06-17T00:50:56.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

