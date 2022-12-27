module.exports = async function (context, req) {
  const date = "2022-12-27T23:09:40.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

