module.exports = async function (context, req) {
  const date = "2024-08-19T14:11:53.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

