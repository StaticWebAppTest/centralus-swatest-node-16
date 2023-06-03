module.exports = async function (context, req) {
  const date = "2023-06-03T11:07:42.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

