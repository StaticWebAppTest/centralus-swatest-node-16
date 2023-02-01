module.exports = async function (context, req) {
  const date = "2023-02-01T13:18:12.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

