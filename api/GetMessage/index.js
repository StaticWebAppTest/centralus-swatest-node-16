module.exports = async function (context, req) {
  const date = "2023-09-17T23:07:52.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

