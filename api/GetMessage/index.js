module.exports = async function (context, req) {
  const date = "2024-09-24T10:12:15.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

