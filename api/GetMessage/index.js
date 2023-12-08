module.exports = async function (context, req) {
  const date = "2023-12-08T14:08:41.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

