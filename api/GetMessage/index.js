module.exports = async function (context, req) {
  const date = "2023-05-30T05:08:21.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

