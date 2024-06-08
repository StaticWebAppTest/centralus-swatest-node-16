module.exports = async function (context, req) {
  const date = "2024-06-08T03:10:50.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

