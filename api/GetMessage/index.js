module.exports = async function (context, req) {
  const date = "2023-10-21T21:07:07.585Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

