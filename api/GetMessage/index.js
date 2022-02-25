module.exports = async function (context, req) {
  const date = "2022-02-25T22:10:07.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

