module.exports = async function (context, req) {
  const date = "2022-09-17T16:16:07.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

