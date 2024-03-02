module.exports = async function (context, req) {
  const date = "2024-03-02T14:08:10.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

