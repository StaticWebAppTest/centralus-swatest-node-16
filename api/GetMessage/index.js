module.exports = async function (context, req) {
  const date = "2022-09-25T06:17:56.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

