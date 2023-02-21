module.exports = async function (context, req) {
  const date = "2023-02-21T05:09:08.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

