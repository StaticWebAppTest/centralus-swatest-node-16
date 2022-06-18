module.exports = async function (context, req) {
  const date = "2022-06-18T07:09:18.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

