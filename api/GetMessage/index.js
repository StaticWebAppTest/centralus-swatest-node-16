module.exports = async function (context, req) {
  const date = "2023-05-20T23:07:53.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

