module.exports = async function (context, req) {
  const date = "2023-01-21T18:10:31.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

