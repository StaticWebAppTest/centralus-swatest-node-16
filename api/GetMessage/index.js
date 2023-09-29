module.exports = async function (context, req) {
  const date = "2023-09-29T05:08:19.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

