module.exports = async function (context, req) {
  const date = "2022-02-28T05:09:20.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

