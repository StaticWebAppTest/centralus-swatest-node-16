module.exports = async function (context, req) {
  const date = "2022-10-09T21:11:19.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

