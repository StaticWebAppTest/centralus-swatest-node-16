module.exports = async function (context, req) {
  const date = "2024-05-24T02:24:25.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

