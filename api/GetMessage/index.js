module.exports = async function (context, req) {
  const date = "2024-02-18T08:11:21.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

