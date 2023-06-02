module.exports = async function (context, req) {
  const date = "2023-06-02T22:07:40.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

