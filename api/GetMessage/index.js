module.exports = async function (context, req) {
  const date = "2023-09-02T07:07:14.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

