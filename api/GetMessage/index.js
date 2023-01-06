module.exports = async function (context, req) {
  const date = "2023-01-06T16:13:17.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

