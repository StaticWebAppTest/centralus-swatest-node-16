module.exports = async function (context, req) {
  const date = "2023-11-16T10:09:50.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

