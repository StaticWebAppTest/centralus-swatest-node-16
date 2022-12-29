module.exports = async function (context, req) {
  const date = "2022-12-29T11:07:52.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

