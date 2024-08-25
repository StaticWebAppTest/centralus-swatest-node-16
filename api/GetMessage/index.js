module.exports = async function (context, req) {
  const date = "2024-08-25T17:11:29.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

