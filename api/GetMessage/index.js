module.exports = async function (context, req) {
  const date = "2022-11-23T02:36:23.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

