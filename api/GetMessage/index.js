module.exports = async function (context, req) {
  const date = "2022-10-31T14:22:09.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

