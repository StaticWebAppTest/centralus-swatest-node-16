module.exports = async function (context, req) {
  const date = "2022-12-16T09:08:56.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

