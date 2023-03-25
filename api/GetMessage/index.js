module.exports = async function (context, req) {
  const date = "2023-03-25T03:09:32.443Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

