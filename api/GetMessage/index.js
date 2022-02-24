module.exports = async function (context, req) {
  const date = "2022-02-24T03:09:04.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

