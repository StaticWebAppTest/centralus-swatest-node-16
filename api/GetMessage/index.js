module.exports = async function (context, req) {
  const date = "2023-02-20T08:13:44.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

