module.exports = async function (context, req) {
  const date = "2023-09-03T09:07:24.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

