module.exports = async function (context, req) {
  const date = "2023-12-19T05:09:05.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

