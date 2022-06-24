module.exports = async function (context, req) {
  const date = "2022-06-24T23:10:09.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

