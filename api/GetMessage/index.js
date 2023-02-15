module.exports = async function (context, req) {
  const date = "2023-02-15T13:20:18.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

