module.exports = async function (context, req) {
  const date = "2024-07-02T07:11:06.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

