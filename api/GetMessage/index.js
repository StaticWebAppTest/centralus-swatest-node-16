module.exports = async function (context, req) {
  const date = "2022-11-04T07:10:49.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

