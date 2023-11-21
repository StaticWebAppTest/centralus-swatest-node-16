module.exports = async function (context, req) {
  const date = "2023-11-21T14:09:08.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

