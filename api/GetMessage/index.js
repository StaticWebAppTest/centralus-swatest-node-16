module.exports = async function (context, req) {
  const date = "2024-02-03T01:38:45.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

