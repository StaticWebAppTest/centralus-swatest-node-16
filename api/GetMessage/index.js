module.exports = async function (context, req) {
  const date = "2023-08-03T11:07:16.127Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

