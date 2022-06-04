module.exports = async function (context, req) {
  const date = "2022-06-04T16:12:49.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

