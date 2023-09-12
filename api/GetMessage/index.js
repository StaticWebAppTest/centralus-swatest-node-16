module.exports = async function (context, req) {
  const date = "2023-09-12T14:08:24.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

