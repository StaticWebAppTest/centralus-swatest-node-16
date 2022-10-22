module.exports = async function (context, req) {
  const date = "2022-10-22T23:14:08.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

