module.exports = async function (context, req) {
  const date = "2023-12-03T19:07:08.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

