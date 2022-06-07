module.exports = async function (context, req) {
  const date = "2022-06-07T04:24:21.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

