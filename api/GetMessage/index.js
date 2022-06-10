module.exports = async function (context, req) {
  const date = "2022-06-10T02:58:06.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

