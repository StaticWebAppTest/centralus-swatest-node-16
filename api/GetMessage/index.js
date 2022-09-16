module.exports = async function (context, req) {
  const date = "2022-09-16T09:13:11.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

