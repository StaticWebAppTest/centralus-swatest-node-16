module.exports = async function (context, req) {
  const date = "2024-08-19T13:15:10.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

