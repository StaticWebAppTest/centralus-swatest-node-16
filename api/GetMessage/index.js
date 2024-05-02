module.exports = async function (context, req) {
  const date = "2024-05-02T07:10:04.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

