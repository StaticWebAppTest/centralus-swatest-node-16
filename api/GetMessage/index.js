module.exports = async function (context, req) {
  const date = "2023-02-26T16:12:07.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

