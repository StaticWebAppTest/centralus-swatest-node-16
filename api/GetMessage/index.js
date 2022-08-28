module.exports = async function (context, req) {
  const date = "2022-08-28T14:09:52.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

