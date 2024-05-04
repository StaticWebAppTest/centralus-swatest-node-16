module.exports = async function (context, req) {
  const date = "2024-05-04T07:09:15.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

