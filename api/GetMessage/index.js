module.exports = async function (context, req) {
  const date = "2023-06-18T21:07:24.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

