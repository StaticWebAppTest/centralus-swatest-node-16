module.exports = async function (context, req) {
  const date = "2024-06-19T23:10:28.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

