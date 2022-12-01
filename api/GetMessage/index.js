module.exports = async function (context, req) {
  const date = "2022-12-01T09:10:31.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

