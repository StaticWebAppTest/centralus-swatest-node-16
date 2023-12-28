module.exports = async function (context, req) {
  const date = "2023-12-28T23:09:41.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

