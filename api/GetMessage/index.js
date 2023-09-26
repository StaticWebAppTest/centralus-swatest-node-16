module.exports = async function (context, req) {
  const date = "2023-09-26T19:07:02.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

