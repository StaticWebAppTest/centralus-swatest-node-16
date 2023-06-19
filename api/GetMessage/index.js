module.exports = async function (context, req) {
  const date = "2023-06-19T14:08:41.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

