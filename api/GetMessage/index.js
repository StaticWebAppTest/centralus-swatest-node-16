module.exports = async function (context, req) {
  const date = "2022-10-07T16:20:30.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

