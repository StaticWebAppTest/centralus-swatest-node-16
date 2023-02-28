module.exports = async function (context, req) {
  const date = "2023-02-28T13:20:22.222Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

