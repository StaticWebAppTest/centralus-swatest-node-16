module.exports = async function (context, req) {
  const date = "2023-10-08T16:09:42.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

