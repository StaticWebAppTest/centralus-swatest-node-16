module.exports = async function (context, req) {
  const date = "2023-07-31T08:12:42.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

