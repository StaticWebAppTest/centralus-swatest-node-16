module.exports = async function (context, req) {
  const date = "2023-08-02T11:07:05.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

