module.exports = async function (context, req) {
  const date = "2022-02-25T23:10:09.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

