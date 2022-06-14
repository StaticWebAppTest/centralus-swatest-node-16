module.exports = async function (context, req) {
  const date = "2022-06-14T17:15:11.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

