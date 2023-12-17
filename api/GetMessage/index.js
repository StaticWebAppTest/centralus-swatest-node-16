module.exports = async function (context, req) {
  const date = "2023-12-17T21:07:45.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

