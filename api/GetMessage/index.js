module.exports = async function (context, req) {
  const date = "2022-07-04T06:16:00.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

