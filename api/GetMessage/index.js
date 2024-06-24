module.exports = async function (context, req) {
  const date = "2024-06-24T23:12:15.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

