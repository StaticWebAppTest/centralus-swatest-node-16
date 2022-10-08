module.exports = async function (context, req) {
  const date = "2022-10-08T03:25:24.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

