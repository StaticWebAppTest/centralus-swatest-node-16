module.exports = async function (context, req) {
  const date = "2023-03-09T19:08:19.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

