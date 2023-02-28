module.exports = async function (context, req) {
  const date = "2023-02-28T03:14:47.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

