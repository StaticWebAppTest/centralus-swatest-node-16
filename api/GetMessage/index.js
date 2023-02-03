module.exports = async function (context, req) {
  const date = "2023-02-03T13:17:07.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

