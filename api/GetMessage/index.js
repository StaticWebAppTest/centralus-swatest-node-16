module.exports = async function (context, req) {
  const date = "2023-09-19T22:08:12.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

