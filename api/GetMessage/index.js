module.exports = async function (context, req) {
  const date = "2023-11-23T08:11:49.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

