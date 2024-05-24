module.exports = async function (context, req) {
  const date = "2024-05-24T10:10:42.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

