module.exports = async function (context, req) {
  const date = "2022-02-25T05:09:15.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

