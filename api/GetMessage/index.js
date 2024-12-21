module.exports = async function (context, req) {
  const date = "2024-12-21T17:10:15.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

