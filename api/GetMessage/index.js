module.exports = async function (context, req) {
  const date = "2023-12-10T10:08:54.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

