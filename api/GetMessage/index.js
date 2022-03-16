module.exports = async function (context, req) {
  const date = "2022-03-16T17:11:57.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

