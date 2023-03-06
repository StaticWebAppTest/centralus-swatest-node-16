module.exports = async function (context, req) {
  const date = "2023-03-06T19:08:09.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

