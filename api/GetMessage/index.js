module.exports = async function (context, req) {
  const date = "2023-12-21T23:09:33.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

