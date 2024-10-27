module.exports = async function (context, req) {
  const date = "2024-10-27T17:09:49.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

