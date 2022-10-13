module.exports = async function (context, req) {
  const date = "2022-10-13T16:19:59.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

