module.exports = async function (context, req) {
  const date = "2023-03-12T21:08:02.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

