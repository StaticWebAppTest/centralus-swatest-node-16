module.exports = async function (context, req) {
  const date = "2024-02-02T13:09:11.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

