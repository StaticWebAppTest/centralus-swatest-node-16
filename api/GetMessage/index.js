module.exports = async function (context, req) {
  const date = "2023-11-13T21:08:25.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

