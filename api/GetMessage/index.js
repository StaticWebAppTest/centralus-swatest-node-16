module.exports = async function (context, req) {
  const date = "2023-12-06T23:09:19.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

