module.exports = async function (context, req) {
  const date = "2024-08-21T21:10:21.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

