module.exports = async function (context, req) {
  const date = "2022-09-17T08:14:52.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

