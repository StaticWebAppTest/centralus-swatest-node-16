module.exports = async function (context, req) {
  const date = "2022-11-29T08:13:52.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

