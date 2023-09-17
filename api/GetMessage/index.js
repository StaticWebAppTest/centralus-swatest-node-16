module.exports = async function (context, req) {
  const date = "2023-09-17T08:09:55.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

