module.exports = async function (context, req) {
  const date = "2023-04-29T13:09:06.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

