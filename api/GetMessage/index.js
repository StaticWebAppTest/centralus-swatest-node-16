module.exports = async function (context, req) {
  const date = "2024-12-27T21:10:14.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

