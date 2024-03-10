module.exports = async function (context, req) {
  const date = "2024-03-10T00:44:17.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

