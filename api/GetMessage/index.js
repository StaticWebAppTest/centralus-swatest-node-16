module.exports = async function (context, req) {
  const date = "2023-01-23T03:10:15.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

