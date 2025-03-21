module.exports = async function (context, req) {
  const date = "2025-03-21T13:21:03.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

