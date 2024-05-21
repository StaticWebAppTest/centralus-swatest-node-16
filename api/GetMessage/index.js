module.exports = async function (context, req) {
  const date = "2024-05-21T01:51:37.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

