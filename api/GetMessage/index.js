module.exports = async function (context, req) {
  const date = "2022-10-01T10:13:06.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

