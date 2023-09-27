module.exports = async function (context, req) {
  const date = "2023-09-27T08:12:03.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

