module.exports = async function (context, req) {
  const date = "2023-05-29T13:11:13.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

