module.exports = async function (context, req) {
  const date = "2022-11-05T14:09:25.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

