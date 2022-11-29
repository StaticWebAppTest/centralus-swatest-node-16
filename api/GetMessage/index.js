module.exports = async function (context, req) {
  const date = "2022-11-29T06:13:22.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

