module.exports = async function (context, req) {
  const date = "2023-11-06T10:10:28.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

