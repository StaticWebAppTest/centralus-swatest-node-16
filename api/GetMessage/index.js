module.exports = async function (context, req) {
  const date = "2023-03-02T08:13:40.967Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

