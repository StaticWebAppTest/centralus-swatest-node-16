module.exports = async function (context, req) {
  const date = "2023-09-13T16:11:14.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

