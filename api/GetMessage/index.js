module.exports = async function (context, req) {
  const date = "2023-09-13T03:09:07.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

