module.exports = async function (context, req) {
  const date = "2024-08-24T10:10:22.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

