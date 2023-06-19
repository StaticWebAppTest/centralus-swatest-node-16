module.exports = async function (context, req) {
  const date = "2023-06-19T05:08:53.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

