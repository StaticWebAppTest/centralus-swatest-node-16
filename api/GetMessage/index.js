module.exports = async function (context, req) {
  const date = "2023-04-24T13:12:31.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

