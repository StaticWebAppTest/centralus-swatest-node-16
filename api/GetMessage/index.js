module.exports = async function (context, req) {
  const date = "2023-05-06T08:10:10.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

