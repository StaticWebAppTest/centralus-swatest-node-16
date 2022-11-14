module.exports = async function (context, req) {
  const date = "2022-11-14T07:10:49.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

