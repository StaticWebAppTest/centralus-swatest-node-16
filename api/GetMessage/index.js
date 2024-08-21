module.exports = async function (context, req) {
  const date = "2024-08-21T17:10:02.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

