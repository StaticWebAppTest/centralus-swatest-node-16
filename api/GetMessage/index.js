module.exports = async function (context, req) {
  const date = "2025-10-25T01:01:40.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

