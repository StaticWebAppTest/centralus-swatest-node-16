module.exports = async function (context, req) {
  const date = "2024-07-08T17:09:16.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

