module.exports = async function (context, req) {
  const date = "2022-06-16T11:08:46.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

