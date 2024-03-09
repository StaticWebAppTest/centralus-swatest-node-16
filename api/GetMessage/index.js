module.exports = async function (context, req) {
  const date = "2024-03-09T09:10:41.171Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

