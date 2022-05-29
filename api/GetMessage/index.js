module.exports = async function (context, req) {
  const date = "2022-05-29T04:24:47.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

