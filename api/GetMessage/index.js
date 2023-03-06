module.exports = async function (context, req) {
  const date = "2023-03-06T14:09:46.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

