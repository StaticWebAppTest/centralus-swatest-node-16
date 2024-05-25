module.exports = async function (context, req) {
  const date = "2024-05-25T07:08:17.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

