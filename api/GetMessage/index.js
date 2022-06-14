module.exports = async function (context, req) {
  const date = "2022-06-14T20:10:52.094Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

