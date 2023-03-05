module.exports = async function (context, req) {
  const date = "2023-03-05T13:14:50.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

