module.exports = async function (context, req) {
  const date = "2024-05-24T05:10:11.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

