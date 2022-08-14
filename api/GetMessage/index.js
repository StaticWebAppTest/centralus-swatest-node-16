module.exports = async function (context, req) {
  const date = "2022-08-14T05:11:23.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

