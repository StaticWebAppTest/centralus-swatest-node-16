module.exports = async function (context, req) {
  const date = "2024-09-02T14:10:18.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

