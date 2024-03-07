module.exports = async function (context, req) {
  const date = "2024-03-07T06:12:52.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

