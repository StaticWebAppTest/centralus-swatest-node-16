module.exports = async function (context, req) {
  const date = "2023-07-10T18:12:24.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

