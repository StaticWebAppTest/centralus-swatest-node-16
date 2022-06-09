module.exports = async function (context, req) {
  const date = "2022-06-09T14:09:23.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

