module.exports = async function (context, req) {
  const date = "2023-06-21T23:09:17.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

