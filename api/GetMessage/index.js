module.exports = async function (context, req) {
  const date = "2024-09-28T15:12:29.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

