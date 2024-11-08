module.exports = async function (context, req) {
  const date = "2024-11-08T21:10:23.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

