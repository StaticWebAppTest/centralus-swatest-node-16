module.exports = async function (context, req) {
  const date = "2024-06-24T00:49:15.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

