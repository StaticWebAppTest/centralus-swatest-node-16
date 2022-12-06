module.exports = async function (context, req) {
  const date = "2022-12-06T14:08:56.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

