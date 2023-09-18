module.exports = async function (context, req) {
  const date = "2023-09-18T21:07:45.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

