module.exports = async function (context, req) {
  const date = "2023-02-20T12:19:10.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

