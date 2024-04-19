module.exports = async function (context, req) {
  const date = "2024-04-19T17:08:53.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

