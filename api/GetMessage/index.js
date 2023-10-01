module.exports = async function (context, req) {
  const date = "2023-10-01T12:15:12.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

