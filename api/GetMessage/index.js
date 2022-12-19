module.exports = async function (context, req) {
  const date = "2022-12-19T11:07:59.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

