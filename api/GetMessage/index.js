module.exports = async function (context, req) {
  const date = "2025-05-24T17:10:27.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

