module.exports = async function (context, req) {
  const date = "2024-08-23T23:10:09.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

