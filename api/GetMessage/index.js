module.exports = async function (context, req) {
  const date = "2023-06-28T21:08:42.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

