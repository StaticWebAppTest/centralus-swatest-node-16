module.exports = async function (context, req) {
  const date = "2023-06-02T09:08:44.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

