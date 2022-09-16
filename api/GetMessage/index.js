module.exports = async function (context, req) {
  const date = "2022-09-16T14:22:31.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

