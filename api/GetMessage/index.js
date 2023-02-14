module.exports = async function (context, req) {
  const date = "2023-02-14T13:20:53.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

