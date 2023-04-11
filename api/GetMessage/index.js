module.exports = async function (context, req) {
  const date = "2023-04-11T13:12:42.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

