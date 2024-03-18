module.exports = async function (context, req) {
  const date = "2024-03-18T10:10:25.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

