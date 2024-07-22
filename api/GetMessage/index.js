module.exports = async function (context, req) {
  const date = "2024-07-22T09:13:55.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

