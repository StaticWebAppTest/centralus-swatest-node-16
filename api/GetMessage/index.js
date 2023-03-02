module.exports = async function (context, req) {
  const date = "2023-03-02T04:12:37.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

