module.exports = async function (context, req) {
  const date = "2023-11-04T09:07:53.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

