module.exports = async function (context, req) {
  const date = "2023-09-21T05:08:22.453Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

