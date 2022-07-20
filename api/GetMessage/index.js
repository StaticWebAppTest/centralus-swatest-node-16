module.exports = async function (context, req) {
  const date = "2022-07-20T14:12:11.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

