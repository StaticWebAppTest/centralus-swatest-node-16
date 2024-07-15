module.exports = async function (context, req) {
  const date = "2024-07-15T15:12:27.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

