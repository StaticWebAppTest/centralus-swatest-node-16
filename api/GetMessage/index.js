module.exports = async function (context, req) {
  const date = "2022-05-10T03:21:09.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

