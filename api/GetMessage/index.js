module.exports = async function (context, req) {
  const date = "2023-02-02T14:08:53.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

