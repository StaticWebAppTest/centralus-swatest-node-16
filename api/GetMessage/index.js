module.exports = async function (context, req) {
  const date = "2022-06-25T16:12:59.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

