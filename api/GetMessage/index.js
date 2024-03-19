module.exports = async function (context, req) {
  const date = "2024-03-19T10:09:46.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

