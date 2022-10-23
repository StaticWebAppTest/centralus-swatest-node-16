module.exports = async function (context, req) {
  const date = "2022-10-23T08:16:29.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

