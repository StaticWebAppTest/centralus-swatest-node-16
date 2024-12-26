module.exports = async function (context, req) {
  const date = "2024-12-26T21:10:20.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

