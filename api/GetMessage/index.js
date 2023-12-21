module.exports = async function (context, req) {
  const date = "2023-12-21T18:09:56.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

