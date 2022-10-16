module.exports = async function (context, req) {
  const date = "2022-10-16T08:16:27.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

