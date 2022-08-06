module.exports = async function (context, req) {
  const date = "2022-08-06T11:08:32.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

