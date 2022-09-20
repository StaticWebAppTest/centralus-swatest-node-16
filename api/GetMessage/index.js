module.exports = async function (context, req) {
  const date = "2022-09-20T14:23:22.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

