module.exports = async function (context, req) {
  const date = "2024-05-08T17:08:08.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

