module.exports = async function (context, req) {
  const date = "2023-09-29T14:07:21.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

