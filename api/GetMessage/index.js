module.exports = async function (context, req) {
  const date = "2022-09-25T05:32:58.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

