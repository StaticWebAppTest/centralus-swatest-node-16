module.exports = async function (context, req) {
  const date = "2023-09-24T00:42:54.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

