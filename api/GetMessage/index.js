module.exports = async function (context, req) {
  const date = "2023-06-11T21:07:32.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

