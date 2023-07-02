module.exports = async function (context, req) {
  const date = "2023-07-02T08:12:14.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

