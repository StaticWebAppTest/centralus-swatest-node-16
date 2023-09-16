module.exports = async function (context, req) {
  const date = "2023-09-16T01:39:40.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

