module.exports = async function (context, req) {
  const date = "2023-06-11T17:07:15.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

