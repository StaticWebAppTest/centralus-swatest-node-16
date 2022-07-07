module.exports = async function (context, req) {
  const date = "2022-07-07T04:39:57.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

