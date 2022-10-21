module.exports = async function (context, req) {
  const date = "2022-10-21T17:27:19.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

