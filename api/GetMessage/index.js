module.exports = async function (context, req) {
  const date = "2022-09-25T17:17:12.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

