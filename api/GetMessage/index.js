module.exports = async function (context, req) {
  const date = "2023-10-21T13:08:46.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

