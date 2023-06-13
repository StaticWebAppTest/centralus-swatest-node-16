module.exports = async function (context, req) {
  const date = "2023-06-13T08:11:39.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

