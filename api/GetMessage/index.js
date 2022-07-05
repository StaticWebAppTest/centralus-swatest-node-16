module.exports = async function (context, req) {
  const date = "2022-07-05T04:29:57.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

