module.exports = async function (context, req) {
  const date = "2022-07-08T09:11:55.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

