module.exports = async function (context, req) {
  const date = "2022-12-28T23:09:04.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

