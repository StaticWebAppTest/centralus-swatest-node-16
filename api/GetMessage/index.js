module.exports = async function (context, req) {
  const date = "2023-09-19T09:08:57.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

