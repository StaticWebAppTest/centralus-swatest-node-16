module.exports = async function (context, req) {
  const date = "2023-05-01T13:10:53.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

