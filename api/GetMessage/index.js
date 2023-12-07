module.exports = async function (context, req) {
  const date = "2023-12-07T05:09:08.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

