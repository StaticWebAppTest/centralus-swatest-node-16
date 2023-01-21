module.exports = async function (context, req) {
  const date = "2023-01-21T13:12:42.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

