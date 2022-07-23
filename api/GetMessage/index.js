module.exports = async function (context, req) {
  const date = "2022-07-23T14:09:33.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

