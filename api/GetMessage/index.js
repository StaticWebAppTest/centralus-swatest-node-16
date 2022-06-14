module.exports = async function (context, req) {
  const date = "2022-06-14T12:23:12.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

