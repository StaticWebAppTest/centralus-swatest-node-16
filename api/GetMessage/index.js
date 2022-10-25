module.exports = async function (context, req) {
  const date = "2022-10-25T07:37:32.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

