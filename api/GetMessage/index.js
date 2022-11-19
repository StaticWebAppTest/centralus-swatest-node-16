module.exports = async function (context, req) {
  const date = "2022-11-19T11:08:26.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

