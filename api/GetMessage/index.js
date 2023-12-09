module.exports = async function (context, req) {
  const date = "2023-12-09T03:09:23.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

