module.exports = async function (context, req) {
  const date = "2023-08-13T05:07:22.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

