module.exports = async function (context, req) {
  const date = "2023-01-19T16:13:08.608Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

