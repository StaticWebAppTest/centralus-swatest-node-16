module.exports = async function (context, req) {
  const date = "2023-05-02T13:12:19.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

