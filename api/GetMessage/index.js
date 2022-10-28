module.exports = async function (context, req) {
  const date = "2022-10-28T03:41:53.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

