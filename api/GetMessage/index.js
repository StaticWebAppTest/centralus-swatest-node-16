module.exports = async function (context, req) {
  const date = "2022-08-28T23:10:42.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

