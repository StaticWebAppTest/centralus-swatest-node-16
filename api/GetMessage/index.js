module.exports = async function (context, req) {
  const date = "2022-08-25T08:16:20.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

