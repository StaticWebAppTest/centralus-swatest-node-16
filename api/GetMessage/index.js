module.exports = async function (context, req) {
  const date = "2023-06-23T08:12:48.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

