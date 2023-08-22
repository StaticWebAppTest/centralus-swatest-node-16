module.exports = async function (context, req) {
  const date = "2023-08-22T23:07:46.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

