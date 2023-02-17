module.exports = async function (context, req) {
  const date = "2023-02-17T18:12:17.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

