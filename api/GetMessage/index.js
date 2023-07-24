module.exports = async function (context, req) {
  const date = "2023-07-24T13:13:27.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

