module.exports = async function (context, req) {
  const date = "2023-09-16T10:07:58.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

