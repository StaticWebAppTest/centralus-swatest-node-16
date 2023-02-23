module.exports = async function (context, req) {
  const date = "2023-02-23T13:20:36.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

