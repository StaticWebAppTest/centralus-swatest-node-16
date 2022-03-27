module.exports = async function (context, req) {
  const date = "2022-03-27T07:09:40.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

