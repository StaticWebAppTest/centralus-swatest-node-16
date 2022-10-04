module.exports = async function (context, req) {
  const date = "2022-10-04T03:37:42.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

