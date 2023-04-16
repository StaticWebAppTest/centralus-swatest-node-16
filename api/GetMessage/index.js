module.exports = async function (context, req) {
  const date = "2023-04-16T08:10:36.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

