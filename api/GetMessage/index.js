module.exports = async function (context, req) {
  const date = "2022-12-19T14:09:08.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

