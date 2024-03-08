module.exports = async function (context, req) {
  const date = "2024-03-08T23:10:25.248Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

