module.exports = async function (context, req) {
  const date = "2025-10-21T21:12:15.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

