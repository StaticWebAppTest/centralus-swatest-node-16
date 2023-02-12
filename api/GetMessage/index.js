module.exports = async function (context, req) {
  const date = "2023-02-12T08:12:04.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

