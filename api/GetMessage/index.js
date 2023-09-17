module.exports = async function (context, req) {
  const date = "2023-09-17T07:07:33.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

