module.exports = async function (context, req) {
  const date = "2023-03-17T10:10:25.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

