module.exports = async function (context, req) {
  const date = "2022-06-29T04:38:03.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

