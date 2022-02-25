module.exports = async function (context, req) {
  const date = "2022-02-25T09:10:10.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

