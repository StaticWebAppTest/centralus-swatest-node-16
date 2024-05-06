module.exports = async function (context, req) {
  const date = "2024-05-06T03:11:04.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

