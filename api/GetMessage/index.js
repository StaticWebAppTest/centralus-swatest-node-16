module.exports = async function (context, req) {
  const date = "2023-06-27T05:09:42.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

