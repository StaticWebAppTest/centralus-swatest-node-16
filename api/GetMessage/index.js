module.exports = async function (context, req) {
  const date = "2024-06-21T14:09:08.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

