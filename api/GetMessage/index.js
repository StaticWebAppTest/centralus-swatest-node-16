module.exports = async function (context, req) {
  const date = "2024-10-27T23:12:15.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

