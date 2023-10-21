module.exports = async function (context, req) {
  const date = "2023-10-21T01:40:31.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

