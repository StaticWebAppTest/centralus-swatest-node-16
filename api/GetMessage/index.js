module.exports = async function (context, req) {
  const date = "2022-10-29T22:10:52.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

