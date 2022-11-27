module.exports = async function (context, req) {
  const date = "2022-11-27T22:09:45.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

