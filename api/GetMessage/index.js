module.exports = async function (context, req) {
  const date = "2023-11-08T12:16:14.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

