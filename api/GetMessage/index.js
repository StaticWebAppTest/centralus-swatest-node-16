module.exports = async function (context, req) {
  const date = "2023-10-11T21:07:49.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

