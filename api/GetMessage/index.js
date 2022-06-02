module.exports = async function (context, req) {
  const date = "2022-06-02T17:22:50.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

