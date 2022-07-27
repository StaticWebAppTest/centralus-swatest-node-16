module.exports = async function (context, req) {
  const date = "2022-07-27T05:27:15.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

