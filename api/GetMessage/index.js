module.exports = async function (context, req) {
  const date = "2022-10-30T08:14:24.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

