module.exports = async function (context, req) {
  const date = "2022-07-09T23:09:22.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

