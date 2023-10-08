module.exports = async function (context, req) {
  const date = "2023-10-08T05:08:03.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

