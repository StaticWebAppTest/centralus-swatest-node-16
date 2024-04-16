module.exports = async function (context, req) {
  const date = "2024-04-16T01:43:19.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

