module.exports = async function (context, req) {
  const date = "2022-03-08T16:14:22.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

