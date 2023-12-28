module.exports = async function (context, req) {
  const date = "2023-12-28T19:07:04.626Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

