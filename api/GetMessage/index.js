module.exports = async function (context, req) {
  const date = "2022-06-10T11:09:41.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

