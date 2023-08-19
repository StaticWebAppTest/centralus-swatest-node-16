module.exports = async function (context, req) {
  const date = "2023-08-19T13:08:52.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

