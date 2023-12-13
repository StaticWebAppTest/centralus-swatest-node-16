module.exports = async function (context, req) {
  const date = "2023-12-13T05:09:04.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

