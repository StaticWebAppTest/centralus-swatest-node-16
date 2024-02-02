module.exports = async function (context, req) {
  const date = "2024-02-02T11:08:02.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

