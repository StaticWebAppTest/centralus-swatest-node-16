module.exports = async function (context, req) {
  const date = "2023-12-24T06:11:07.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

