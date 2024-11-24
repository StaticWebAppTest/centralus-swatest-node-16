module.exports = async function (context, req) {
  const date = "2024-11-24T14:10:02.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

