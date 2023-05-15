module.exports = async function (context, req) {
  const date = "2023-05-15T16:10:59.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

