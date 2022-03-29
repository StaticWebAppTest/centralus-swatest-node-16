module.exports = async function (context, req) {
  const date = "2022-03-29T17:13:01.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

