module.exports = async function (context, req) {
  const date = "2022-05-03T05:14:52.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

