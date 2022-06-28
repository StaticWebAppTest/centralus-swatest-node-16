module.exports = async function (context, req) {
  const date = "2022-06-28T05:20:30.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

