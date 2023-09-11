module.exports = async function (context, req) {
  const date = "2023-09-11T10:09:26.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

