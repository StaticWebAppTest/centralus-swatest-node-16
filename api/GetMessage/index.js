module.exports = async function (context, req) {
  const date = "2024-10-02T07:11:09.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

